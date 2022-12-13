import L from 'leaflet'

interface MarkerServicoProps {
    numero: number;
    //tipoServico: 'U' | 'L';
    corFundo: string;
    corFonte: string;
    situacao: string;
}

export function markerServico({ numero, corFundo, corFonte, situacao }: MarkerServicoProps) {
    /*
        const numero = '1';
        const tipoServico = 'U';
        const corFundo = '#5599ff';
        const corSituacao = 'red';
        const corFonte = '#FFFFFF';            
    */

    const situacaoColors = {
        EXECUTADO: '#26ae00',
        EXECUTANDO: '#00ae9b',
        RECUSADO: '#ea5555',
        PROGRAMADA: '#039be5',
        EM_ROTA: '#f9cb6a',
    }

    const situacaoKey = situacao as keyof typeof situacaoColors;

    const iconSize = new L.Point(20, 28);

    return L.divIcon({
        html: `<svg height='27px' width='27px' viewbox='0 0 61 76' version='1.1'>"
                <g transform='translate(-99.498504,-230)'>
                    <g transform='matrix(0.14,0,0,0.17,100.61637,227)'>
				        <g>
                            <path 
                                d='M 230.149,120.939 65.986,256.274 c 0,0.191 -0.048,0.472 -0.144,0.855 -0.094,0.38 -0.144,0.656 -0.144,0.852 v 137.041 c 0,4.948 1.809,9.236 5.426,12.847 3.616,3.613 7.898,5.431 12.847,5.431 h 109.63 c 0,0 28.65212,-0.37996 42.97887,-0.35383 10.04007,0.0183 30.11813,0.35783 30.11813,0.35783 h 109.629 c 4.948,0 9.236,-1.814 12.847,-5.435 3.617,-3.607 5.432,-7.898 5.432,-12.847 V 257.981 c 0,-0.76 -0.104,-1.334 -0.288,-1.707 z'                                 
							    style='fill:${corFundo};fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'
                            />
							<path 
                                d='M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816    c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245    c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136    c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998    L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125    c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z'
							    style='fill:${corFundo};fill-rule:evenodd;stroke:#000000;stroke-width:2px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'/>
						</g>
                    </g>
                </g>    
                <circle cx='52' cy='60' r='12' stroke='white' stroke-width='2' fill='${situacaoColors[situacaoKey]}'>
				</circle>    
                <text x='26' y='55' font-family='sans-serif' font-size='25px' fill='${corFonte}'>
                    ${numero}
                </text>            
            </svg>
            `,
        iconSize,
        className: "bg-transparent"
    })

}