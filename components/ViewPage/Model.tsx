import React, { useState } from "react";
interface FormData {
  name: string;
  email: string;
  image: File | null;
}

interface Compo {
  moviename: any;
}

const Model: React.FC<Compo> = ({ moviename }) => {
  // State to manage model visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle model visibility
  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    image: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: any) => {
    const image = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      image,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <button
        onClick={toggleModel}
        className="bg-[#FFC933] text-white font-bold py-2 px-4 rounded"
      >
        Book Movie
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded ">
            {/* form section */}
            <div className="w-full max-w-sm mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
              >
                <h2 className="text-2xl font-bold mb-6">Form</h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Movie Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={moviename}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={toggleModel}
                    className="bg-[#FFC933] hover:bg-[#FFC933] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
