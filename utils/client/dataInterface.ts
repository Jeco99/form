export type FormData = {
  formname: string;
  formdescription: string;
};

export type FieldData = {
  field: {
    form_label: string;
    form_type: string;
    form_required: boolean;
    form_order: number;
  }[];
};
