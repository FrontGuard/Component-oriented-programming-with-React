import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Схема валідації
const formSchema = yup.object().shape({
    destination: yup
        .string()
        .required("Оберіть місце призначення")
        .min(3, "Мінімум 3 символи"),
    startDate: yup.string().required("Виберіть дату початку подорожі"),
    endDate: yup.string().required("Виберіть дату завершення подорожі"),
    travelers: yup
        .number()
        .required("Вкажіть кількість подорожуючих")
        .positive()
        .integer()
        .min(1, "Мінімум 1 подорожуючий"),
    budget: yup.number().required("Вкажіть бюджет").positive().integer(),
});

const TourForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

    const onSubmit = (data) => {
        try {
            console.log("Дані форми:", data);
            setFormStatus("success"); // Встановлюємо статус успіху
        } catch (error) {
            setFormStatus("error"); // Встановлюємо статус помилки
        }
    };

    const handleReset = () => {
        reset();
        setFormStatus(null); // Скидаємо статус
    };

    return (
        <div>
            <h1>Форма пошуку туру</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Місце призначення:</label>
                    <input {...register("destination")} />
                    <p style={{ color: "red" }}>{errors.destination?.message}</p>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Дата початку:</label>
                    <input type="date" {...register("startDate")} />
                    <p style={{ color: "red" }}>{errors.startDate?.message}</p>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Дата завершення:</label>
                    <input type="date" {...register("endDate")} />
                    <p style={{ color: "red" }}>{errors.endDate?.message}</p>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Кількість подорожуючих:</label>
                    <input type="number" {...register("travelers")} />
                    <p style={{ color: "red" }}>{errors.travelers?.message}</p>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Бюджет:</label>
                    <input type="number" {...register("budget")} />
                    <p style={{ color: "red" }}>{errors.budget?.message}</p>
                </div>

                <div style={{ marginBottom: "30px" }}>
                    <button type="submit">Відправити</button>
                    <button
                        type="button"
                        onClick={handleReset}
                        style={{ marginLeft: "10px" }}
                    >
                        Очистити
                    </button>
                </div>
            </form>

            {/* Модальне вікно */}
            {formStatus && (
                <div
                    style={{
                        border: "1px solid black",
                        padding: "20px",
                        background: formStatus === "success" ? "#d4edda" : "#f8d7da",
                        color: formStatus === "success" ? "#155724" : "#721c24",
                        marginTop: "20px",
                    }}
                >
                    {formStatus === "success" ? (
                        <>
                            <p>Форма успішно надіслана!</p>
                            <button onClick={handleReset}>Ок</button>
                        </>
                    ) : (
                        <>
                            <p>Сталася помилка при надсиланні форми!</p>
                            <button onClick={handleReset}>Спробувати ще раз</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default TourForm;
