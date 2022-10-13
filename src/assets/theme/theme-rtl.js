/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 React base styles
import colors from "client/src/assets/theme/base/colors";
import breakpoints from "client/src/assets/theme/base/breakpoints";
import typography from "client/src/assets/theme/base/typography";
import boxShadows from "client/src/assets/theme/base/boxShadows";
import borders from "client/src/assets/theme/base/borders";
import globals from "client/src/assets/theme/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "client/src/assets/theme/functions/boxShadow";
import hexToRgb from "client/src/assets/theme/functions/hexToRgb";
import linearGradient from "client/src/assets/theme/functions/linearGradient";
import pxToRem from "client/src/assets/theme/functions/pxToRem";
import rgba from "client/src/assets/theme/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "client/src/assets/theme/components/sidenav";
import list from "client/src/assets/theme/components/list";
import listItem from "client/src/assets/theme/components/list/listItem";
import listItemText from "client/src/assets/theme/components/list/listItemText";
import card from "client/src/assets/theme/components/card";
import cardMedia from "client/src/assets/theme/components/card/cardMedia";
import cardContent from "client/src/assets/theme/components/card/cardContent";
import button from "client/src/assets/theme/components/button";
import iconButton from "client/src/assets/theme/components/iconButton";
import input from "client/src/assets/theme/components/form/input";
import inputLabel from "client/src/assets/theme/components/form/inputLabel";
import inputOutlined from "client/src/assets/theme/components/form/inputOutlined";
import textField from "client/src/assets/theme/components/form/textField";
import menu from "client/src/assets/theme/components/menu";
import menuItem from "client/src/assets/theme/components/menu/menuItem";
import switchButton from "client/src/assets/theme/components/form/switchButton";
import divider from "client/src/assets/theme/components/divider";
import tableContainer from "client/src/assets/theme/components/table/tableContainer";
import tableHead from "client/src/assets/theme/components/table/tableHead";
import tableCell from "client/src/assets/theme/components/table/tableCell";
import linearProgress from "client/src/assets/theme/components/linearProgress";
import breadcrumbs from "client/src/assets/theme/components/breadcrumbs";
import slider from "client/src/assets/theme/components/slider";
import avatar from "client/src/assets/theme/components/avatar";
import tooltip from "client/src/assets/theme/components/tooltip";
import appBar from "client/src/assets/theme/components/appBar";
import tabs from "client/src/assets/theme/components/tabs";
import tab from "client/src/assets/theme/components/tabs/tab";
import stepper from "client/src/assets/theme/components/stepper";
import step from "client/src/assets/theme/components/stepper/step";
import stepConnector from "client/src/assets/theme/components/stepper/stepConnector";
import stepLabel from "client/src/assets/theme/components/stepper/stepLabel";
import stepIcon from "client/src/assets/theme/components/stepper/stepIcon";
import select from "client/src/assets/theme/components/form/select";
import formControlLabel from "client/src/assets/theme/components/form/formControlLabel";
import formLabel from "client/src/assets/theme/components/form/formLabel";
import checkbox from "client/src/assets/theme/components/form/checkbox";
import radio from "client/src/assets/theme/components/form/radio";
import autocomplete from "client/src/assets/theme/components/form/autocomplete";
import container from "client/src/assets/theme/components/container";
import popover from "client/src/assets/theme/components/popover";
import buttonBase from "client/src/assets/theme/components/buttonBase";
import icon from "client/src/assets/theme/components/icon";
import svgIcon from "client/src/assets/theme/components/svgIcon";
import link from "client/src/assets/theme/components/link";
import dialog from "client/src/assets/theme/components/dialog";
import dialogTitle from "client/src/assets/theme/components/dialog/dialogTitle";
import dialogContent from "client/src/assets/theme/components/dialog/dialogContent";
import dialogContentText from "client/src/assets/theme/components/dialog/dialogContentText";
import dialogActions from "client/src/assets/theme/components/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
