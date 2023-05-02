import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";

import VisitorForm from "components/common/VisitorForm";

const EditVisitor = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity({});
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const onFinishHandler = async (data: FieldValues) => {
    //if (!propertyImage.url) return alert("Please select an image");

    await onFinish({
      ...data,
      email: user.email,
    });
  };

  return (
    <VisitorForm
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      onFinishHandler={onFinishHandler}
    />
  );
};

export default EditVisitor;
