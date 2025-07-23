import React from "react";
import { Grid } from "@mui/material";
import GithubLink from "./Github";
import ItchLink from "./Itch";
import MastodonLink from "./Mastodon";
import YouTubeLink from "./YouTube";

export default function Social() {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ my: 1}}>
            <Grid>
                <MastodonLink />
            </Grid>
            <Grid>
                <GithubLink />
            </Grid>
            <Grid>
                <ItchLink />
            </Grid>
            <Grid>
                <YouTubeLink />
            </Grid>
        </Grid>
    )
}
