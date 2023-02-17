import React, { useState } from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import Dropdown from "../../../components/InputField/Dropdown";
import { BASE_URL } from "../../../services";

const UploadHouseForm = ({ landlord }) => {
  const [details, setDetails] = useState({
    address: "",
    state: "",
    imageUrl: "",
    price: "",
    plan: "",
    model: "",
    description: "",
    bathrooms: "",
    bedrooms: "",
    parkingSpaces: "",
    uploadedDate: new Date(),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const uploadHouse = (e) => {
    e.preventDefault();
    setError("");
    const {
      address,
      imageUrl,
      price,
      plan,
      model,
      bathrooms,
      bedrooms,
      parkingSpaces,
    } = details;

    if (
      !address ||
      !imageUrl ||
      !price ||
      !plan ||
      !model ||
      !bathrooms ||
      !bedrooms ||
      !parkingSpaces
    ) {
      setError("Please fill out all fields");
      return;
    }

    fetch(`${BASE_URL}/uploadhouse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${landlord?.token}`,
      },
      body: JSON.stringify({ ...details, landlordId: landlord?.details.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setSuccess(true);
          alert("House uploaded successfully");
          setSuccess(false);
          setDetails({});
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={uploadHouse} className="upload-form" key={success}>
        <h3>Upload New House</h3>
        <InputField
          // icon={<MdSortByAlpha />}
          value={details.address}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              address: event.target.value,
            }))
          }
          placeholder="Address"
          name="address"
        />
        <InputField
          // icon={<MdSortByAlpha />}
          value={details.state}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              state: event.target.value,
            }))
          }
          placeholder="State"
          name="state"
        />
        <InputField
          // icon={<MdSortByAlpha />}
          value={details.imageUrl}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              imageUrl: event.target.value,
            }))
          }
          placeholder="Image Url"
          name="Image Url"
        />
        <InputField
          // icon={<MdSortByAlpha />}
          value={details.price}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              price: event.target.value,
            }))
          }
          placeholder="Price"
          name="Price"
        />
        <Dropdown
          // icon={<FaUser />}
          value={details.model}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              model: event.target.value,
            }))
          }
          placeholder={"Model"}
          options={["Flat", "Bungalow", "2 Story Building"]}
        />
        <Dropdown
          // icon={<FaUser />}
          value={details.plan}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              plan: event.target.value,
            }))
          }
          placeholder={"Payment Plan"}
          options={["Weekly", "Monthly", "Per Annum"]}
        />
        <Dropdown
          // icon={<FaUser />}
          value={details.bathrooms}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              bathrooms: event.target.value,
            }))
          }
          placeholder={"No of Bathrooms"}
          options={["1", "2", "3"]}
        />
        <Dropdown
          // icon={<FaUser />}
          value={details.bedrooms}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              bedrooms: event.target.value,
            }))
          }
          placeholder={"No of Bedrooms"}
          options={["1", "2", "3"]}
        />
        <Dropdown
          // icon={<FaUser />}
          value={details.parkingSpaces}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              parkingSpaces: event.target.value,
            }))
          }
          placeholder={"No of Packing Spaces"}
          options={["1", "2", "3"]}
        />
        <InputField
          // icon={<MdSortByAlpha />}
          textArea
          value={details.description}
          onChange={(event) =>
            setDetails((prev) => ({
              ...prev,
              description: event.target.value,
            }))
          }
          placeholder="Description"
          name="Description"
        />
        <Button text="Upload" type="submit" solid />
      </form>
    </div>
  );
};

export default UploadHouseForm;
