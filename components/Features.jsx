import React from 'react'
import {
    HomeIcon,
    MagnifyingGlassIcon,
    DocumentDuplicateIcon,
    QuestionMarkCircleIcon,
    EnvelopeIcon,
    CurrencyDollarIcon,
    DevicePhoneMobileIcon

} from "@heroicons/react/24/outline";


const Features = () => {
    const items = [{
        id: 1,
        title: 'Showcase all properties',
        icon: DocumentDuplicateIcon,
        description: 'A comprehensive directory to showcase a large database of properties.',
    }, {
        id: 2,
        title: 'Property details',
        icon: HomeIcon,
        description: 'A separate page for displaying property details along with an image gallery..',
    },
    {
        id: 3,
        title: 'Enquiry forms',
        icon: QuestionMarkCircleIcon,
        description: 'If a visitor is interested in a particular property, he/she can submit an enquiry form to get in touch with the seller.',
    },
    {
        id: 4,
        title: 'Email capture',
        icon: EnvelopeIcon,
        description: 'Capture visitor emails and build an emailing marketing list.',
    },
    {
        id: 5,
        title: 'Search and filtering',
        icon: MagnifyingGlassIcon,
        description: 'Advanced search and filtering functionality to find properties in seconds.',
    },
    {
        id: 6,
        title: 'Appraisal form for property valuations',
        icon: CurrencyDollarIcon,
        description: 'A form to submit a property valuation request.',
    },
    {
        id: 7,
        title: 'Responsive design',
        icon: DevicePhoneMobileIcon,
        description: 'A fully responsive design, allowing each user to access the system from any device.',
    },
    ]
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-3 sm:mt-22'>
                <h3 className='font-poppins text-[23px] sm:text-[32px] text-[0D121C] font-semibold'>Features and Functionality</h3>
                <h6 className='mt-4 font-poppins text-[16px] text-[#4F4851] text-center tracking-tight'>Showcase properties providing a number of various filters for users to find their perfect match.</h6>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 xl:mx-30">
                {items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={item.id} className="p-4 ">
                            <div className="flex gap-2 mx-3 items-center">
                                <h5>
                                    <IconComponent className="size-6 font-bold text-black" />
                                </h5>
                                <p className="font-poppins text-[16px] font-medium text-[#000000]">
                                    {item.title}
                                </p>
                            </div>
                            <p className="ml-12 mr-4 mt-1 text-[#4F4851] text-[12px] text-start">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default Features


