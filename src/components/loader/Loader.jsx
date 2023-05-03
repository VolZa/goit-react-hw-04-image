import { Grid } from  'react-loader-spinner'
import { GrideLoader } from './Loader.styled'

export const Loader = () => {
   return (
      <GrideLoader>
         <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{
               display: 'block',
               marginTop: 20,
               marginLeft: 'auto',
               marginRight: 'auto',
            }}
            wrapperClass=""
            visible={true}
         />
      </GrideLoader>
  
   )
}
