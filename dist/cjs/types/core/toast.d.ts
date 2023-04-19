import { Toast, Renderable, ToastOptions, DefaultToastOptions, ValueOrFunction } from "./types";
type Message = ValueOrFunction<Renderable, Toast>;
type ToastHandler = (message: Message, options?: ToastOptions) => string;
declare const toast: {
    (message: Message, opts?: ToastOptions): string;
    success: ToastHandler;
    info: ToastHandler;
    error: ToastHandler;
    warning: ToastHandler;
    loading: ToastHandler;
    custom: ToastHandler;
    dismiss(toastId?: string): void;
    remove(toastId?: string): void;
    promise<T>(promise: Promise<T>, msgs: {
        loading: Renderable;
        success: ValueOrFunction<Renderable, T>;
        error: ValueOrFunction<Renderable, any>;
    }, opts?: DefaultToastOptions): Promise<T>;
};
export { toast };
