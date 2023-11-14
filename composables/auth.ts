export const useAuthUser = () => {
  return useState<any>("user", () => null);
};

export const useAuth = () => {
  const authUser = useAuthUser();
  const $projectServices = useProjectService();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const login = async (phone: string, password: string) => {
    try {
      const data = await $projectServices.repository.login({
        phone,
        password,
      });

      setUser(data.user);

    //   window.location.href = "/";
    } catch (error) {}
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $projectServices.repository.getAuthUser(
          useRequestHeaders(["cookie"]) as HeadersInit
        );

        setUser(data.user);
      } catch (error: any) {
        console.log("error", error);
      }
    }

    return authUser;
  };

  return {
    login,
    me,
  };
};
