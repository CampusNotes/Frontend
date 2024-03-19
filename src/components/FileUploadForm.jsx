import {
    Card,
    Input,
    Checkbox,
    Option,
    Button,
    Typography,
    Select
} from "@material-tailwind/react";

import { useState } from "react";

import axios from "axios";

export default function FileUploadForm() {

    const [branch, setBranch] = useState("Information_Technology");
    const [semester, setSemester] = useState("1");
    const [subject, setSubject] = useState('');
    const [publication, setPublication] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async () => {


        const fromdata = new FormData();

        fromdata.append('branch', branch)
        fromdata.append('semester', semester)
        fromdata.append('subject', subject)
        fromdata.append('publicationName', publication)
        fromdata.append('file', file)

        const response = await axios.post('/api/file/upload', fromdata)

        console.log(response.data);

    }

    return (

        <div className="bg-white p-4 rounded-lg">
            <div className="w-full pb-2 border-b-2 border-b-purple-500">
                <Typography variant="h4" className="text-purple-500">Upload File</Typography>
            </div>
            <div className="p-4">
                <form className="w-full flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Branch
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="username"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Semester
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="username"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Subject
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="username"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Publication name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="username"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Publication name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="username"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                </form>
            </div>
        </div>
    );
}