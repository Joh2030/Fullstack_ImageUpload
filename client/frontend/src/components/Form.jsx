import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Form.jsx:13 Uncaught (in promise) ReferenceError: Cannot access 'formData' before initialization

    const formData = new formData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("owner", data.owner);

    axios
      .post("http://localhost:3004/products", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="owner" {...register("owner", { required: true })} />
      <input
        placeholder="firstName"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <span>This field is required</span>}
      <input
        placeholder="price"
        type="number"
        {...register("price", { required: true, min: 1 })}
      />
      {errors.price?.type === "required" && <span>This field is required</span>}
      {errors.price?.type === "min" && <span>minimum value is 1</span>}

      <input type="file" {...register("image", { required: true })} />
      <input type="submit" />
    </form>
  );
}
