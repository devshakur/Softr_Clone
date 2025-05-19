"use client";
import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

const PasswordCheck = ({ password }) => {
  return (
    <div>
      <PasswordChecklist
        rules={["capital", "number", "specialChar"]}
        minLength={8}
        value={password}
        messages={{
          capital: "password must include one Capital letter",
          specialChar: "password must include one special character.",
          number: "password must include one numerical number [0-9]",
        }}
      />
    </div>
  );
};

export default PasswordCheck;
