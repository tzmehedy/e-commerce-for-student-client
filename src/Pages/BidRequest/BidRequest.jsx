import BidRequestTable from './BidRequestTable';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const BidRequest = () => {
    
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()



   const {data: allBidsRequest = [], isLoading, isError, error, refetch} = useQuery({
      queryFn: () => getData(),
      queryKey: ["allBidsRequest"],
    });

    console.log(allBidsRequest)
    console.log(isLoading)

    

    // const [allBidsRequest, setAllBidsRequest] = useState()

    // useEffect(()=>{
    //   getData()
    // },[user])

    const getData = async() =>{
      const { data } = await axiosSecure.get(
        `/bidRequest/${user?.email}`
      );
      return data
    }
    if(isLoading) return <p>Data is loading..........</p>

    if(error || isError){
      console.log(error.message)
    }

    return (
      <div className="my-20">
        <div className="">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Offer Price</th>
                <th>Deadline</th>
                <th>Comments</th>
                <th>Seller Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allBidsRequest?.map((bid) => (
                <BidRequestTable
                  bid={bid}
                  key={bid._id}
                  refetch={refetch}
                ></BidRequestTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BidRequest;