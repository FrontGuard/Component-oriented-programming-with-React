import * as yup from 'yup';

export const formSchema = yup.object().shape({
    destination: yup.string().required("Destination is required"),
    nights: yup.number().min(1, "At least 1 night").required("Number of nights is required"),
    budget: yup.number().min(1, "Budget must be positive").required("Budget is required"),
    departureCity: yup.string().required("Departure city is required"),
});
