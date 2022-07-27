import React, { useState, useEffect } from "react";
import restAPI from "../../api/api";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import InputFile from "./InputFile";
import successImage from "../../assets/success-image.svg";
import styles from "./UserRegistration.module.scss";
function UserRegistration() {
  //Variables
  const [position, setPosition] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Select a position",
    photo: "",
  });

  const [successImageShown, showSuccessImage] = useState(false);

  //To activate submit button we need to check if all inputs were filled and check for errors
  const [submitActive, activateSubmit] = useState(false);
  const dataArray = [position, name, email, phone, photo];

  useEffect(() => {
    dataArray.every(Boolean)
      ? Object.values(errors).every((item) => item.length == 0)
        ? activateSubmit(true)
        : activateSubmit(false)
      : activateSubmit(false);
  }, [dataArray, errors]);

  //Validation

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
    setErrors({ ...errors, position: "" });
  };

  const handleInputChange = (e) => {
    let inputValue = e.target;
    setErrors({ ...errors, [inputValue.name]: "" });

    //Validate name
    if (inputValue.name === "name") {
      if (inputValue.value.length <= 2) {
        setErrors({ ...errors, name: "Minimum name length allowed is 2" });
      }

      if (inputValue.value.length > 30) {
        setErrors({ ...errors, name: "Maximum name length allowed is 30" });
      }
      setName(inputValue.value);
    }
    //Validate email
    if (inputValue.name === "email") {
      const regex =
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

      if (inputValue.value.length <= 2) {
        setErrors({ ...errors, email: "Minimum email length allowed is 2" });
      }

      if (inputValue.value.length > 30) {
        setErrors({ ...errors, email: "Maximum email length allowed is 100" });
      }

      if (!regex.test(inputValue.value)) {
        setErrors({ ...errors, email: "Invalid email" });
      }
      setEmail(inputValue.value);
    }
    //Validate phone
    if (inputValue.name === "phone") {
      const regex = /^[\+]{0,1}380([0-9]{9})$/;
      if (!regex.test(inputValue.value)) {
        setErrors({
          ...errors,
          phone: "Number should start with code of Ukraine +380",
        });
      }
      setPhone(inputValue.value);
    }
    //Validate position
    if (inputValue.name === "position") {
      const regex = /^[\+]{0,1}380([0-9]{9})$/;

      if (!regex.test(inputValue.value)) {
        setErrors({
          ...errors,
          phone: "Number should start with code of Ukraine +380",
        });
      }
    }
    //Validate photo
    if (inputValue.name === "photo") {
      if (inputValue.files[0].size > 5e6) {
        setErrors({
          ...errors,
          photo: "Photo size is too big. Maximum size is 5Mb",
        });
      }
      let imageType = inputValue.files[0].type.split("/")[1];
      if (imageType != "jpeg" && imageType != "jpg") {
        setErrors({ ...errors, photo: "Type of the photo must be jpeg/jpg." });
      }
      setPhoto(inputValue.files[0]);
    }
  };

  //Submit and post request
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("position_id", +position);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("photo", photo);
    const token = await restAPI.getToken();

    const request = await restAPI.registerUser(formData, token.token);
    //If post is successfull, show registration success image

    request.success ? showSuccessImage(true) : showSuccessImage(false);
  };

  return (
    <div className={styles.registration__form__container}>
      {successImageShown ? (
        <>
          <h2>User successfully registered</h2>
          <img src={successImage} alt="User successfully registered!"></img>
        </>
      ) : (
        <>
          <h2>Working with POST request</h2>
          <form
            className={styles.registration__form}
            method="post"
            onSubmit={handleFormSubmit}
          >
            <Input
              inputType={"text"}
              inputName="name"
              inputPlaceholder={"Your name"}
              handleInputChange={handleInputChange}
              error={errors.name}
            />
            <Input
              inputType={"email"}
              inputName="email"
              inputPlaceholder={"Email"}
              handleInputChange={handleInputChange}
              error={errors.email}
            />
            <Input
              inputType={"text"}
              inputName="phone"
              inputPlaceholder={"Phone"}
              handleInputChange={handleInputChange}
              error={errors.phone}
            />
            <dl className={styles.select__role} onChange={handlePositionChange}>
              <dt>Select your position</dt>
              <dd className={styles.select__role__option}>
                <input type="radio" name="role" id="radio1" value="1"></input>
                <label for="radio1">Frontend developer</label>
              </dd>

              <dd className={styles.select__role__option}>
                <input type="radio" name="role" id="radio2" value="2"></input>
                <label for="radio2">Backend developer</label>
              </dd>

              <dd className={styles.select__role__option}>
                <input type="radio" name="role" id="radio3" value="4"></input>
                <label for="radio3">Designer</label>
              </dd>

              <dd className={styles.select__role__option}>
                <input type="radio" name="role" id="radio4" value="3"></input>
                <label for="radio4">QA</label>
              </dd>
            </dl>
            <InputFile
              inputType={"file"}
              inputName="photo"
              inputPlaceholder={"Upload your photo"}
              handleInputChange={handleInputChange}
              error={errors.photo}
            />
            <Button
              value="Sign up"
              width="100px"
              type="submit"
              disabled={submitActive ? false : true}
            />
          </form>
        </>
      )}
    </div>
  );
}

export default UserRegistration;
