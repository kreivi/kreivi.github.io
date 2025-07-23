import React from "react";
import { Tooltip, Typography } from "@mui/material";

interface DateComponentProps {
    dateString: string;
}

export default function DateComponent({ dateString }: DateComponentProps) {
    const date = new Date(dateString);
    return (
        <Tooltip title={date.toLocaleString()}>
            <Typography variant="caption" component="time" dateTime={dateString} sx={{ textDecoration: 'underline', cursor: 'pointer' }} alignSelf="center">
                {date.toLocaleDateString()}
            </Typography>
        </Tooltip>
    );
}