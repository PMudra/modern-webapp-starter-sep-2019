import React from "react"
import { useAuth } from "react-use-auth"
import { Button, Box, Text } from "rebass"
import { useMutation } from "react-apollo-hooks"
import { BarLoader } from "react-spinners"
import { Link } from "gatsby"

import { CREATE_ALBUM } from "../queries"

const CreateAlbumButton = ({ userId }) => {

  const [createAlbum, { data, loading }] = useMutation(CREATE_ALBUM, {
    variables: {
      userId
    }
  })

  console.log(data)

  return <Button onClick={createAlbum}>Create Album</Button>
}

export default CreateAlbumButton
