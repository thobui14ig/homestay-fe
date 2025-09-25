import KeepAliveCustom from '../../../components/KeepAliveCustom'
import Comment from '../../../components/Comment/Comment'
import { CrawType } from '../../../shared/interfaces/link'

function index() {
  return (
    <KeepAliveCustom>
      <Comment crawType={CrawType.FACEBOOK}/>
    </KeepAliveCustom>
  )
}

export default index
