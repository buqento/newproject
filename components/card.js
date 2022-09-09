import { useState } from "react"
import { Calendar, Email, Lock, Map, Mobile, User } from "./icons"

const Card = ({ item }) => {

    const {
        firstName,
        fullName,
        emailAddress,
        dOB,
        phone,
        password,
        picture,
        location
    } = item

    const [selected, setSelected] = useState({
        label: "Hi, My name is",
        value: fullName
    })

    const setAvatar = name => {
        var initials = name.split(' ').map(str => str ? str[0].toUpperCase() : "")[0];
        return initials
    }

    const setDate = (dOB) => {
        const event = new Date(dOB);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return event.toLocaleDateString('id-ID', options)
    }

    return (
        <div
            className="rounded-lg border"
            style={{
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            }}>
            <div className="p-32 text-center">
                <div className="flex items-center justify-center w-128 h-128 mx-auto rounded-full bg-blue-500 text-48 text-white font-black bg-cover"
                    style={{
                        backgroundImage: `url(${picture})`
                    }}
                >
                    {setAvatar(firstName)}
                </div>
                <div className="mt-24 text-14 text-gray-500">
                    {selected.label}
                </div>
                <div className="mt-4 text-20 text-gray-900 font-medium">
                    {selected.value}
                </div>
            </div>
            <div className="flex p-16 border-t border-gray-200 justify-between">
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "Hi, My name is",
                    value: fullName
                })}>
                    <User />
                </span>
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "My email address is",
                    value: emailAddress
                })}>
                    <Email />
                </span>
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "My birhtday is",
                    value: setDate(dOB)
                })}>
                    <Calendar />
                </span>
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "My address is",
                    value: location.city
                })}>
                    <Map />
                </span>
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "My phone number is",
                    value: phone
                })}>
                    <Mobile />
                </span>
                <span className="cursor-pointer" onClick={() => setSelected({
                    label: "My password is",
                    value: password
                })}>
                    <Lock />
                </span>
            </div>
        </div>
    )
}

export default Card