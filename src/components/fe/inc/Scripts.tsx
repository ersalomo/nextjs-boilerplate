import Script from 'next/script'

const Scripts = () => {

    return (
        <>
            <Script src="https://code.jquery.com/jquery-3.5.1.min.js" />
            <Script src="/fe/dist/assets/plugins/global/plugins.bundle.js" />
            <Script src="/fe/dist/assets/js/scripts.bundle.js" />
            <Script src="/fe/dist/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js" />
            <Script src="https://cdn.amcharts.com/lib/5/index.js" />
            <Script src="https://cdn.amcharts.com/lib/5/xy.js" />
            <Script src="https://cdn.amcharts.com/lib/5/percent.js" />
            <Script src="https://cdn.amcharts.com/lib/5/radar.js" />
            <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" />
            <Script src="https://cdn.amcharts.com/lib/5/map.js" />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js" />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js" />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js" />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js" />
            <Script src="/fe/dist/assets/plugins/custom/datatables/datatables.bundle.js" />
            <Script src="/fe/dist/assets/js/widgets.bundle.js" />
            <Script src="/fe/dist/assets/js/custom/apps/chat/chat.js" />
            <Script src="/fe/dist/assets/js/custom/utilities/modals/upgrade-plan.js" />
            <Script src="/fe/dist/assets/js/custom/utilities/modals/users-search.js" />
        </>
    )
}

export default Scripts;