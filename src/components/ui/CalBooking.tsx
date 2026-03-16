'use client';

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking({
    buttonClass = "btn-fire",
    buttonText = "Book a Clarity Session ↓"
}: {
    buttonClass?: string,
    buttonText?: string
}) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", {
                "theme": "dark",
                "styles": {
                    "branding": {
                        "brandColor": "#FC4F2F"
                    }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return (
        <button
            data-cal-namespace="30min"
            data-cal-link="ashok-verma/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className={buttonClass}
        >
            {buttonText}
        </button>
    );
}
