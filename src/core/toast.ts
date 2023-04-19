import {
  Toast,
  Renderable,
  ToastOptions,
  ToastType,
  DefaultToastOptions,
  ValueOrFunction,
  resolveValue,
} from "./types";
import { genId, getBackgroundColor } from "./utils";
import { dispatch, ActionType } from "./store";

type Message = ValueOrFunction<Renderable, Toast>;

type ToastHandler = (message: Message, options?: ToastOptions) => string;

const createToast = (
  message: Message,
  type: ToastType = "blank",
  opts?: ToastOptions
): Toast => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId(),
  theme: opts?.theme ? opts.theme : "light",
  style: {
    backgroundColor: opts?.style?.backgroundColor
      ? opts?.style?.backgroundColor
      : opts?.theme === "coloured"
      ? getBackgroundColor(type)
      : "#fff",
    color: opts?.style?.color
      ? opts?.style?.color
      : opts?.theme === "coloured"
      ? "#fff"
      : "#262626",
    ...opts?.style,
  },
});

const createHandler =
  (type?: ToastType): ToastHandler =>
  (message, options) => {
    const toast = createToast(
      typeof message === "string" ? message.trim() : message,
      type,
      options
    );
    dispatch({ type: ActionType.UPSERT_TOAST, toast });
    return toast.id;
  };

const toast = (message: Message, opts?: ToastOptions) =>
  createHandler("blank")(message, opts);

toast.success = createHandler("success");
toast.info = createHandler("info");
toast.error = createHandler("error");
toast.warning = createHandler("warning");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");

toast.dismiss = (toastId?: string) => {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId,
  });
};

toast.remove = (toastId?: string) =>
  dispatch({ type: ActionType.REMOVE_TOAST, toastId });

toast.promise = <T>(
  promise: Promise<T>,
  msgs: {
    loading: Renderable;
    success: ValueOrFunction<Renderable, T>;
    error: ValueOrFunction<Renderable, any>;
  },
  opts?: DefaultToastOptions
) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });

  promise
    .then((p) => {
      toast.success(resolveValue(msgs.success, p), {
        id,
        ...opts,
        ...opts?.success,
      });
      return p;
    })
    .catch((e) => {
      toast.error(resolveValue(msgs.error, e), {
        id,
        ...opts,
        ...opts?.error,
      });
    });

  return promise;
};

export { toast };
