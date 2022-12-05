import L from 'leaflet'

interface MarkerCarroProps {
    cor: string;
}

export function markerCarro({ cor }: MarkerCarroProps) {
    return L.divIcon({
        html: `<svg version='1.1' x='0px' y='0px'	 viewBox='0 0 410.006 410.006'>
                    <g>
                        <path style='fill:${cor};' d='M381.311,175.02l-19.314-13.367l-17.71-77.204c-4.249-18.525-20.734-31.657-39.741-31.657H105.46c-19.006,0-35.491,13.132-39.741,31.657L48.01,161.654l-19.314,13.367c-12.778,8.843-20.403,23.394-20.403,38.933v69.482c0,12.905,10.462,23.367,23.367,23.367h346.687c12.905,0,23.367-10.462,23.367-23.367v-69.482C401.714,198.414,394.089,183.863,381.311,175.02z'/>
                        <path style='fill:#76CDCE;' d='M339.426,161.651H70.586l16.58-72.28c1.97-8.58,9.49-14.58,18.3-14.58h199.08c8.81,0,16.33,6,18.3,14.58L339.426,161.651z'/>
                        <g>
                            <g>
                                <path style='fill:#FFFFFF;' d='M39.692,219.546c0,17.018,13.796,30.814,30.814,30.814s30.814-13.796,30.814-30.814H39.692z'/>
                            </g>
                            <g>
                                <path style='fill:#FFFFFF;' d='M308.686,219.546c0,17.018,13.796,30.814,30.814,30.814s30.814-13.796,30.814-30.814H308.686z'/>
                            </g>
                        </g>
                        <path style='fill:#CCCCCC;' d='M393.326,273.443H16.68c-9.212,0-16.68,7.468-16.68,16.68l0,0c0,9.212,7.468,16.68,16.68,16.68h376.646c9.212,0,16.68-7.468,16.68-16.68l0,0C410.006,280.911,402.538,273.443,393.326,273.443z'/>
                        <path style='fill:#666666;' d='M30.279,306.803v40.716c0,5.354,4.34,9.694,9.694,9.694H77.12c5.354,0,9.694-4.34,9.694-9.694v-40.716'/>
                        <path style='fill:#666666;' d='M323.192,306.803v40.716c0,5.354,4.34,9.694,9.694,9.694h37.147c5.354,0,9.694-4.34,9.694-9.694v-40.716'/>
                        <path style='fill:#4D4D4D;' d='M269.462,306.803v4.935c0,11.986-9.716,21.702-21.702,21.702h-70.59c-11.986,0-21.702-9.716-21.702-21.702v-4.935'/>
                        <path style='fill:#96E0DE;' d='M339.426,161.651h-92.56l-86.86-86.86h144.54c8.81,0,16.33,6,18.3,14.58L339.426,161.651z'/>
                        <rect x='133.506' y='219.546' style='fill:#037893;' width='151' height='12'/>
                        <rect x='133.506' y='239.771' style='fill:#037893;' width='151' height='12'/>
                    </g>
                </svg>`,
        iconSize: new L.Point(30, 38),
        className: "bg-transparent"
    });

}