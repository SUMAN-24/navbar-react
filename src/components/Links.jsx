import React from 'react'

const navbarOptions = [
    {
        label: "Services",
    },
    {
        label: "Projects",
    },
    {
        label: "About",
    },
];

const Links = () => {
  return (
    <div className="navbar-options">
        {navbarOptions.map((navbarOption) => (
                <a href="#"><span>{navbarOption.label}</span></a>
        ))}
    </div>
  )
}

export default Links