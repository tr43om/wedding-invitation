export type Guest = {
  name: string;
};

export type FormData = {
  attending: boolean;
  mainGuest: string;
  additionalGuests: Guest[];
  preferences: {
    strongAlcohol: boolean;
    redWine: boolean;
    whiteWine: boolean;
  };
};
