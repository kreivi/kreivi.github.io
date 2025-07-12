'use client';
import { Computer, DarkMode, LightMode } from "@mui/icons-material";
import { Button, ButtonGroup, SupportedColorScheme, useColorScheme } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";


export default function ColorSchemeToggle() {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [schemeSelection, setSchemeSelection] = useLocalStorage<SupportedColorScheme | null>('scheme-selection', colorScheme || null, { initializeWithValue: false });
    if (!colorScheme) return null;

    const onChangeScheme = (scheme: SupportedColorScheme | null) => {
        setColorScheme(scheme);
        setSchemeSelection(scheme);
    };

    return (
        <ButtonGroup size="small" aria-label="color scheme toggle">
            <Button
                color="secondary"
                aria-label="light mode"
                aria-pressed={colorScheme === 'light'}
                onClick={() => onChangeScheme('light')}
                variant={schemeSelection === 'light' ? 'contained' : 'outlined'}
            >
                <LightMode />
            </Button>
            <Button
                color="secondary"
                aria-label="system mode"
                aria-pressed={colorScheme === null}
                onClick={() => onChangeScheme(null)}
                variant={schemeSelection === null ? 'contained' : 'outlined'}
            >
                <Computer />
            </Button>
            <Button
                color="secondary"
                aria-label="dark mode"
                aria-pressed={colorScheme === 'dark'} onClick={() => onChangeScheme('dark')}
                variant={schemeSelection === 'dark' ? 'contained' : 'outlined'}
            >
                <DarkMode />
            </Button>
        </ButtonGroup>
    );
}