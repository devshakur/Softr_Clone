import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Modal = ({ openModal, isOpen, closeModal }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Upload Property
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full mt-8 max-w-6xl md:max-h-[90vh] overflow-y-auto transform bg-white rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold text-center text-gray-800 mb-6"
                  >
                    Upload Property
                  </Dialog.Title>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Upload */}
                    <div className="w-full md:w-[280px] h-[250px] md:h-[320px] flex flex-col gap-5 justify-center items-center bg-gray-100 border border-dashed border-gray-400 rounded-lg relative overflow-hidden">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <label
                          htmlFor="property-image"
                          className="text-center cursor-pointer text-gray-500 p-4"
                        >
                          <span className="block text-lg font-medium">
                            Tap to upload image
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            id="property-image"
                            name="property-image"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>

                    {/* Video Upload */}
                    <div className="w-full md:w-[280px] h-[250px] md:h-[320px] flex justify-center items-center bg-gray-100 border border-dashed border-gray-400 rounded-lg relative overflow-hidden">
                      {videoPreview ? (
                        <video
                          controls
                          src={videoPreview}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <label
                          htmlFor="property-video"
                          className="text-center cursor-pointer text-gray-500 p-4"
                        >
                          <span className="block text-lg font-medium">
                            Tap to upload video
                          </span>
                          <input
                            type="file"
                            accept="video/*"
                            id="property-video"
                            name="property-video"
                            onChange={handleVideoChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>

                    {/* Property Form */}
                    <form className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="property-name" className="block mb-1 font-medium">
                            Property Name
                          </label>
                          <input
                            className="border border-gray-300 rounded p-2 w-full"
                            type="text"
                            name="property-name"
                            id="property-name"
                          />
                        </div>
                        <div>
                          <label htmlFor="location" className="block mb-1 font-medium">
                            Location
                          </label>
                          <input
                            className="border border-gray-300 rounded p-2 w-full"
                            type="text"
                            name="location"
                            id="location"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="details" className="block mb-1 font-medium">
                          Property Details
                        </label>
                        <textarea
                          className="border border-gray-300 rounded p-2 w-full"
                          name="details"
                          id="details"
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1 font-medium">Living Room</label>
                          <input
                            className="border border-gray-300 rounded p-2 w-full"
                            type="number"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-medium">Bedrooms</label>
                          <input
                            className="border border-gray-300 rounded p-2 w-full"
                            type="number"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2].map((_, idx) => (
                          <div key={idx}>
                            <label className="block mb-1 font-medium">Feature {idx + 1}</label>
                            <div className="flex gap-2">
                              <select
                                name={`type-${idx}`}
                                className="border border-gray-300 rounded p-2 w-1/2"
                              >
                                <option value="toilets">Toilets</option>
                                <option value="kitchen">Kitchen</option>
                              </select>
                              <input
                                type="number"
                                className="border border-gray-300 rounded p-2 w-1/2"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                     Upload Property
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
