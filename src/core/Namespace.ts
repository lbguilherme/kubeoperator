import { IResource, IStaticResource, Resource, wrapResource } from "../base/Resource";

export interface NamespaceMetadata {}

export interface NamespaceSpec {
  finalizers?: string[];
}

export interface NamespaceStatus {
  phase: "Active" | "Terminating";
}

interface Namespace extends IResource<NamespaceMetadata, NamespaceSpec, NamespaceStatus> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Namespace = wrapResource<NamespaceMetadata, NamespaceSpec, NamespaceStatus, Namespace, "Namespace", "v1">(
  // eslint-disable-next-line no-shadow
  class Namespace extends Resource<NamespaceMetadata, NamespaceSpec, NamespaceStatus, "Namespace", "v1"> {
    static kind = "Namespace";

    protected static apiPlural = "namespaces";

    static apiVersion = "v1";
  },
);
