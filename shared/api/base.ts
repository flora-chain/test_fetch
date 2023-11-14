import { ofetch } from "ofetch";
import type { FetchContext, $Fetch } from "ofetch";

export abstract class BaseApi {
  protected readonly fetcher: $Fetch;
  private globalHeaders: HeadersInit = {};
  private _baseUrl = "/";

  protected constructor() {
    this.fetcher = ofetch.create({
      baseURL: this._baseUrl,
      credentials: "include",
      retry: 1,
      onRequest: (ctx: FetchContext): Promise<void> | void => {
        this.onRequest(ctx);
      },
      onResponseError: (ctx: FetchContext): Promise<any> | void =>
        this.onResponseError(ctx),
    });
  }

  addGlobalHeader(headers: Record<string, string>) {
    this.globalHeaders = {
      ...this.globalHeaders,
      ...headers,
    };
    return this;
  }

  setBaseUrl(v: string) {
    this._baseUrl = v;
    return this;
  }

  onRequest(ctx: FetchContext): Promise<void> | void {
    ctx.options.headers = this.globalHeaders;
    ctx.options.baseURL = this._baseUrl;
  }

  async onResponseError(ctx: FetchContext): Promise<any> {}
}
