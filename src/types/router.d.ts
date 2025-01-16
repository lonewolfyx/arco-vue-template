import {defineComponent} from 'vue';
import type {RouteMeta} from 'vue-router';

export type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);


export interface AppRouterTypes {
    path: string;
    name: string;
    component: Component | string;
    meta?: RouteMeta;
    children?: AppRouterTypes[];
    alias?: string;
    props?: Record<string, any>;
}