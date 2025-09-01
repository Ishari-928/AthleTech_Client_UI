import client from "./client";

// Register athletes with payment slip
export const registerAthletes = async (athletes, paymentFile, totalFee) => {
  const formData = new FormData();

  const payload = athletes.map((a) => ({
    name: a.fullName,
    email: a.email,
    contact_no: a.contact,
    gender: a.gender,
    school: a.school,
    dob: a.dob,
    age_group: a.ageGroup,
    selected_events: a.events,
    registrationfee: a.registrationFee,
    total_registrationfee: totalFee,
  }));

  formData.append("athletes", JSON.stringify(payload));
  formData.append("payment_slip", paymentFile);

  // Log FormData contents for debugging
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

  const response = await client.post("/api/v1/athletes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};