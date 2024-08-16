import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [currentSection, setCurrentSection] = useState('home');

    const handleScroll = () => {
        const sections = navigation.map((item) => document.getElementById(item.id));
        let current = 'home';
        for (let section of sections) {
            if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) {
                current = section.id;
            }
        }
        setCurrentSection(current);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className="bg-blue-800 font-bold sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center mx-4">
                                <img
                                    className="h-8 w-auto rounded-3xl"
                                    src={Logo}
                                    alt="Yuva Sai"
                                />
                                <h4 className='px-1.5 text-white text-xl font-normal'>Yuva Sai</h4>
                            </div>
                            <div className="mx-4 absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="hidden md:ml-6 md:block">
                                <div className="flex space-x-4 justify-center">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.id === currentSection
                                                    ? "bg-gray-900 text-white"
                                                    : "text-white hover:bg-gray-700 hover:text-white",
                                                "rounded-md px-3 py-2 text-sm font-medium"
                                            )}
                                            aria-current={item.id === currentSection ? "page" : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.id === currentSection
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={item.id === currentSection ? "page" : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
