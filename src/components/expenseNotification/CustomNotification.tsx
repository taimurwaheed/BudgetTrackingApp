import { useEffect } from "react"
import { Snackbar, Alert, IconButton, Box, Typography } from "@mui/material"
import { CheckCircle, X, AlertCircle, Info, AlertTriangle } from "lucide-react"
import type { CustomNotificationProps } from "../../types/props.types"

export default function CustomNotification({
    open,
    message,
    severity,
    onClose,
}: CustomNotificationProps) {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose()
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [open, onClose])

    const getIcon = () => {
        switch (severity) {
            case "success":
                return <CheckCircle size={20} style={{ color: "#16a34a" }} />
            case "error":
                return <AlertCircle size={20} style={{ color: "#dc2626" }} />
            case "update":
                return <Info size={20} style={{ color: "#0284c7" }} />
            case "delete":
                return <AlertCircle size={20} style={{ color: "#b91c1c" }} />
            case "warning":
                return <AlertTriangle size={20} style={{ color: "#ca8a04" }} />
            case "info":
                return <Info size={20} style={{ color: "#2563eb" }} />
            default:
                return <CheckCircle size={20} style={{ color: "#16a34a" }} />
        }
    }

    const getBgStyle = () => {
        switch (severity) {
            case "success":
                return { bgcolor: "#ecfdf5", color: "#065f46", borderColor: "#a7f3d0" }
            case "update":
                return { bgcolor: "#e0f2fe", color: "#075985", borderColor: "#bae6fd" }
            case "delete":
                return { bgcolor: "#fee2e2", color: "#7f1d1d", borderColor: "#fecaca" }
            default:
                return {}
        }
    }

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={onClose}
            autoHideDuration={4000}
        >
            <Alert
                icon={false}
                action={
                    <IconButton
                        aria-label="close"
                        size="small"
                        onClick={onClose}
                        sx={{ color: "inherit" }}
                    >
                        <X size={16} />
                    </IconButton>
                }
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    borderRadius: 2,
                    boxShadow: 3,
                    px: 2,
                    py: 1.5,
                    minWidth: 260,
                    border: 1,
                    ...getBgStyle(),
                }}
            >
                {getIcon()}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {message}
                    </Typography>
                </Box>
            </Alert>
        </Snackbar>
    )
}
