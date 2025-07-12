import { Grid } from "@mui/material";
import GithubLink from "./Github/GithubLink";
import ItchLink from "./Itch/ItchLink";
import MastodonLink from "./Mastodon/MastodonLink";
import YouTubeLink from "./YouTube/YouTubeLink";

export default function Social() {
    return (
        <Grid container justifyContent="center" alignItems="center">
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

