import { BaseApi } from "~/shared/api/base";
import { UrlGenerator } from "~/shared/api/url-generator";

export class HttpRepository extends BaseApi {
  constructor(private urlGenerator: UrlGenerator, baseUrl: string) {
    super();
    this.setBaseUrl(baseUrl);
  }

  async login(body: any, filter: any = {}) {
    return this.fetcher(this.urlGenerator.login(), {
      method: "POST",
      body,
      params: filter,
    });
  }

  async getAuthUser(data: any = {}) {
    return this.fetcher(this.urlGenerator.getAuthUser(), {
      headers: data,
    });
  }

  async getUserProfileByNickname(
    nickname: string,
    filter: any = {},
    options: any = {}
  ): Promise<any> {
    return this.fetcher(this.urlGenerator.getUserProfileByNickname(nickname), {
      method: "GET",
      params: filter,
      headers: options,
    });
  }
}
