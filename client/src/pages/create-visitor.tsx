import { useState } from "react";
import { useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";

import VisitorForm from "components/common/VisitorForm";

const CreateVisitor = () => {
  const navigate = useNavigate();
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const onFinishHandler = async (data: Record<string, any>) => {
    //if (!propertyImage.url) return alert("Please select an image");

    await onFinish(data);
  };

  return (
    <VisitorForm
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      onFinishHandler={onFinishHandler}
    />
  );
};

export default CreateVisitor;
