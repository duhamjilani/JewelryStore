import { useEffect, useState } from "react";
import "./Checkout.css";
import axios from "axios";
import Swal from "sweetalert2";

function Checkout() {
  const [Users, setUsers] = useState([]);
  const [User, setUser] = useState([]);

  const [formData, setFormData] = useState({
    phone: "",
    country: "",
    city: "",
    address: "",
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    GetDataUsers();
    GetDataUser();
  }, []);

  const GetDataUsers = () => {
    axios
      .get("http://localhost:9000/Users")
      .then((respons) => setUsers(respons.data));
  };

  const GetDataUser = () => {
    axios.get(`http://localhost:9000/Users/7`).then((respons) => {
      setUser(respons.data);
    });
  };

  const UpdateUser = () => {
    axios
      .put(`http://localhost:9000/Users/${User.id}`, {
        ...User,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        firstname: formData.firstname,
        lastname: formData.lastname,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(User);
  };

  // const ele = Users.find((elemnt) => {
  //   return elemnt.id == User.id;
  // });

  // console.log(Users);

  // const idCheker =
  const HandleForms = (event) => {
    event.preventDefault();
    if (
      formData.phone !== "" &&
      // formData.country !== "" &&
      formData.city !== "" &&
      formData.address !== "" &&
      formData.firstname !== "" &&
      formData.lastname !== ""
    ) {
      UpdateUser();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        // window.location.replace("/https//www.google.com");
      }, "3000");
    }
  };
  const handleChange = (event) => {
    // console.log(formData);
    // Extract the name and value from the event target (the form field)
    const { name, value } = event.target;
    // callback function Refers to formData
    // [] array use to make it dynamicall value , changable when user focus on any input
    setFormData((prevFormData) => ({
      // Spread the previous form data to create a new object
      ...prevFormData,
      // Use the computed property name [name] to update the specific field with the new value
      [name]: value,
    }));
  };

  //
  // console.log(formData);

  return (
    <>
      <div className="ContainerCheckOut">
        <form action="" onClick={HandleForms}>
          <h3 className="Title">Jewelry-Themeforshop</h3>

          {/* <div className="CheckOut labelField">
            <label htmlFor="">Contact</label>
            <input type="text" />
          </div> */}
          <input
            className="Number-Arow"
            type="number"
            placeholder="phone"
            name="phone"
            // value={formData.phone}
            onChange={handleChange}
            // required
          />
          <div className="CheckOut labelField">
            <label htmlFor="">Shipping address</label>
            <select
              name="country"
              // required
            >
              <option value="">Select your city</option>
              <option value="Amman" name="country" onClick={handleChange}>
                Amman (the capital)
              </option>
              <option value="Irbid">Irbid</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Mafraq">Mafraq</option>
              <option value="Ajloun">Ajloun</option>
              <option value="Jerash">Jerash</option>
              <option value="Madaba">Madaba</option>
              <option value="Balqa">Balqa</option>
              <option value="Karak">Karak</option>
              <option value="Tafileh">Tafileh</option>
              <option value="Maan">Maan</option>
              <option value="Aqaba">Aqaba</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            // required
          />
          <div className="firstNameLast">
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              // required
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              // required
            />
          </div>
          <input
            type="text"
            placeholder="Address (St ,apartment , suite ,etc)"
            name="address"
            value={formData.address}
            onChange={handleChange}
            // required
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Checkout;
