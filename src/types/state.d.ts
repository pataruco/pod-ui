export interface State {
  user: {
    loading: boolean;
    dataIsLoaded: boolean;
    data: {
      updated: string;
      files: any[];
    };
  };
  modal: {
    isModalOpen: boolean;
  };
}
