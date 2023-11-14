export function useProjectService(): any {
  const { $projectServices } = useNuxtApp();

  return $projectServices;
}
