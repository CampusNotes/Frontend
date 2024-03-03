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

export default function FileUploadForm() {

    const [branch, setbranch] = useState("Information_Technology");
    const [semester, setsemester] = useState("1");
    return (

        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                File Upload
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter File Details..
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Branch
                    </Typography>
                    <div className="w-72">
                        <Select
                            label="Select Version"
                            value={branch}
                            onChange={(val) => setbranch(val)}
                        >
                            <Option value="Information_Technology">Information Technology</Option>
                            <Option value="Computer_Science">Computer Science</Option>
                            <Option value="Electronics&Telecommunication">Electronics&Telecommunication</Option>
                            {/* <Option value="angular">Material Tailwind Angular</Option>
        <Option value="svelte">Material Tailwind Svelte</Option> */}
                        </Select>
                    </div>


                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Semester
                    </Typography>
                    <div className="w-72">
                        <Select
                            label="Select Version"
                            value={semester}
                            onChange={(val) => setsemester(val)}
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                        </Select>
                    </div>

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Subject
                    </Typography>
                    <div className="w-72">
                    <Input
                        size="sm"
                        placeholder="Enter Subject"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                    </div>
                    

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Publication Name
                    </Typography>
                    <div className="w-72">
                    <Input
                        size="md"
                        placeholder="Enter Publication Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                    </div>
                    

                </div>
                <div className="w-72">

                <Button className="mt-6" fullWidth>
                    Upload
                </Button>
                </div>

            </form>
        </Card>
    );
}