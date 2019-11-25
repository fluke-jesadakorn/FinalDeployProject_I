import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      pages: {
        begin: 0,
        stop: 20
      }
    }
    this.addData = this.addData.bind(this)
  }

  componentDidMount = () => {
    this.interval = setTimeout(this.getData(), 10000)
  }

  getData = () => {
    axios.get('http://localhost:5004/api/getData')
      .then(async (res) => {
        let fromGetData = res.data
        let datas = fromGetData.map((data) => { return data })
        this.setState({ data: datas })
        await console.log(datas)
      })
  }

  addData = async () => {
    let rand = Math.random()
    await axios.post("http://localhost:5004/api/addData", { data: rand })
  }

  deleteData = async (index) => {
    let listId = await this.state.data.map((Id) => { return Id.id })
    await console.log(listId)
    await console.log(index)
    axios.delete("http://localhost:5004/api/deleteData", { data: { params: listId[index] } })
      .catch((err) => {
        console.log("Not Found Index : " + err)
      })
    console.log("Your sent delete data index : " + index)
  }

  editData = () => {
    return <h1>Hello</h1>
  }

  multipage = async (previous, next) => {
    let preButton = this.state.pages.begin
    let nextButton = this.state.pages.stop

    if (await previous && this.state.pages.begin !== 0) {
      preButton = preButton - 10
      nextButton = nextButton - 10
      this.setState({ pages: { begin: preButton, stop: nextButton } })
      preButton = 0
      nextButton = 0
    }
    if (await next) {
      preButton = preButton + 10
      nextButton = nextButton + 10
      this.setState({ pages: { begin: preButton, stop: nextButton } })
      preButton = 0
      nextButton = 0
    }
    // console.log(await `previous: ${this.state.pages.begin} , next: ${this.state.pages.stop}`)
  }

  render() {
    let { data, pages } = this.state
    return (
      <div className='main-container'>
        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>อุณหภูมิ</th>
              <th>ความชื้น</th>
              <th>เวลา/วันที่</th>
              <th>คำสั่ง</th>
            </tr>
            {data.slice(pages.begin, pages.stop).map((showData, index) =>
              <tr>
                <td><li key={index}> {showData.id} </li></td>
                <td>""</td>
                <td> {showData.data} </td>
                <td>{showData.date}</td>
                <td><button onClick={() => { this.deleteData(index) }}> Delete </button>
                  <button onClick={() => { this.editData(index) }}> Edit </button></td>
              </tr>
            )}
          </table>

          <button onClick={() => { this.multipage(1, 0) }}>Previous</button>
          <button onClick={() => { this.multipage(0, 1) }}>Next</button>
        </div>

        <h3>Add Data</h3>

        <button onClick={() => { this.addData() }} >Add</button>

        <style jsx="true">
          {`
            body {
              background-color:pink;              
            }
            table, th, td {
              border: 1px solid black;
            }
          `}
        </style>
      </div>
    )
  }
}