export type FormData = {
  form_name: string;
  form_description: string;
};

export type FieldData = {
  field: {
    field_label: string;
    field_type: string;
    field_required: boolean;
    field_order: number;
    form_id: string | undefined | string[];
  }[];
};
