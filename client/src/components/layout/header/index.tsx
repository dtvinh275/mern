import React, { useContext } from "react";
import { useGetIdentity, useGetLocale, useSetLocale } from "@pankod/refine-core";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import i18n from "i18n";

import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  return shouldRenderHeader ? (
    <AppBar
    color="default"
    position="sticky"
    elevation={0}
    sx={{ background: "#fcfcfc" }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
            <FormControl sx={{ minWidth: 64 }}>
              <Select
                disableUnderline
                defaultValue={currentLocale}
                inputProps={{ "aria-label": "Without label" }}
                variant="standard"
                sx={{
                  color: "inherit",
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                  "& .MuiStack-root > .MuiTypography-root": {
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  },
                }}
              >
                {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                  // @ts-ignore
                  <MenuItem
                    selected={currentLocale === lang}
                    key={lang}
                    defaultValue={lang}
                    onClick={() => {
                      changeLanguage(lang);
                    }}
                    value={lang}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "5px",
                        }}
                        src={`/images/flags/${lang}.svg`}
                      />
                      <Typography>
                        {lang === "en" ? "English" : "German"}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Typography variant="subtitle2">{user?.name}</Typography>
            ) : null}
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
