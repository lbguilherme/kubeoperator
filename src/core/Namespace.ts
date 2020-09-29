import { Resource, wrapResource } from "../base/Resource";

export interface NamespaceMetadata {}

export interface NamespaceSpec {
  finalizers?: string[];
}

export interface NamespaceStatus {
  phase: "Active" | "Terminating";
}

const _class = class Namespace extends Resource<
  NamespaceMetadata,
  NamespaceSpec,
  NamespaceStatus
> {
  static kind = "Namespace";
  static apiPlural = "namespaces";
  static apiVersion = "v1";
};

export const Namespace = wrapResource<
  NamespaceMetadata,
  NamespaceSpec,
  NamespaceStatus,
  typeof _class["prototype"],
  typeof _class
>(_class);