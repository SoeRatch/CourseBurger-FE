import TS from 'rollup-plugin-typescript2'

export default {

    input :[

        'src/index.ts'
        
    ],

    output:{
        dir:'lib',
        format: 'esm',
        sourcemap:true,
        preserveModules:true
    },

    plugins:[TS()],
    
    external: ['react','@dsys-cb.e/foundation']

}