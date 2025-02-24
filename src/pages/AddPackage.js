import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

const AddPackage = ({ onBack }) => {
  const [packageName, setPackageName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(updatedFaqs);
  };

  return (
    <div className="p-6">
      <button onClick={onBack} className="text-blue-600 hover:underline">
        ← Back to Packages
      </button>
      <h2 className="text-2xl font-semibold mb-4">Add New Package</h2>

      {/* Package Name */}
      <div className="mb-4">
        <label className="block font-medium">Package Name</label>
        <input
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          className="w-full p-2 border rounded-md mt-1"
          placeholder="Enter package name"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md mt-1"
          rows="3"
          placeholder="Enter package description"
        />
      </div>

      {/* Image Uploader */}
      <div className="mb-4">
        <label className="block font-medium">Package Image</label>
        <input type="file" onChange={handleImageChange} className="mt-2" />
        {image && (
          <img
            src={image}
            alt="Package Preview"
            className="mt-3 w-full h-48 object-cover rounded-md"
          />
        )}
      </div>

      {/* FAQ Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          Frequently Asked Questions
        </h3>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3 border p-3 rounded-md">
            <input
              type="text"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              className="w-full p-2 border rounded-md mb-2"
              placeholder="Enter question"
            />
            <input
              type="text"
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter answer"
            />
            {faqs.length > 1 && (
              <button
                onClick={() => removeFaq(index)}
                className="mt-2 text-red-500 flex items-center"
              >
                <Trash2 size={16} className="mr-1" />
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addFaq}
          className="mt-2 flex items-center text-blue-600"
        >
          <PlusCircle size={18} className="mr-1" />
          Add FAQ
        </button>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Save Package
      </button>
    </div>
  );
};

export default AddPackage;
