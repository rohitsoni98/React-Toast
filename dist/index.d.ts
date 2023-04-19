import * as React$1 from 'react';
import React__default, { CSSProperties } from 'react';

type ToastType = "success" | "error" | "info" | "warning" | "loading" | "blank" | "custom";
type ToastPosition = string | "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type Renderable = JSX.Element | string | null;
type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
declare const resolveValue: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
interface Toast {
    type: ToastType;
    id: string;
    message: ValueOrFunction<Renderable, Toast> | string;
    icon?: Renderable;
    duration?: number;
    pauseDuration: number;
    position?: ToastPosition;
    progressbar?: boolean;
    theme?: string | "coloured" | "light";
    ariaProps: {
        role: "status" | "alert";
        "aria-live": "assertive" | "off" | "polite";
    };
    style?: CSSProperties;
    className?: string;
    createdAt: number;
    visible: boolean;
    height?: number;
    iconColor?: string;
}
type ToastOptions = Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "theme" | "progressbar" | "iconColor">>;
type DefaultToastOptions = ToastOptions & {
    [key in ToastType]?: ToastOptions;
};
interface ToasterProps {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    children?: (toast: Toast) => JSX.Element;
}

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

declare const useToaster: (toastOptions?: DefaultToastOptions) => {
    toasts: Toast[];
    handlers: {
        updateHeight: (toastId: string, height: number) => void;
        startPause: () => void;
        endPause: () => void;
        calculateOffset: (toast: Toast, opts?: {
            reverseOrder?: boolean | undefined;
            gutter?: number | undefined;
            defaultPosition?: string | undefined;
        } | undefined) => number;
    };
};

interface State {
    toasts: Toast[];
    pausedAt: number | undefined;
}
declare const useStore: (toastOptions?: DefaultToastOptions) => State;

interface ToastBarProps {
    toast: Toast;
    position?: ToastPosition;
    style?: React__default.CSSProperties;
    children?: (components: {
        icon: Renderable;
        message: Renderable;
    }) => Renderable;
}
declare const ToastBar: React__default.FC<ToastBarProps>;

declare const ToastIcon: React$1.FC<{
    toast: Toast;
}>;

declare const Toaster: React$1.FC<ToasterProps>;

export { DefaultToastOptions, Renderable, Toast, ToastBar, ToastIcon, ToastOptions, ToastPosition, ToastType, Toaster, ToasterProps, ValueFunction, ValueOrFunction, toast as default, resolveValue, toast, useToaster, useStore as useToasterStore };
