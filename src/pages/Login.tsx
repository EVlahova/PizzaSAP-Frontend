import React from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router"
import { History } from "history"
import {
  TextField,
  Card,
  CardContent,
  Button,
  CardHeader,
} from "@material-ui/core"

import * as AuthActions from "redux/actions/Auth"
import { useStateForInput } from "hooks"

type Props = RouteComponentProps & {
  login: (user: AuthActions.AuthBody, history: History<any>) => Promise<void>
}

const Login: React.SFC<Props> = ({ login, history }) => {
  const [username, setUsername] = useStateForInput("")
  const [password, setPassword] = useStateForInput("")

  return (
    <Card raised>
      <CardHeader title="Login" titleTypographyProps={{ variant: "h3" }} />
      <CardContent>
        <form
          onSubmit={e => {
            e.preventDefault()
            login({ username, password }, history)
          }}
        >
          <TextField
            id="username"
            label="Username"
            margin="normal"
            variant="outlined"
            value={username}
            onChange={setUsername}
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={setPassword}
            fullWidth
          />
          <Button disableRipple type="submit" variant="contained">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

const mapDispatchToProps = {
  login: AuthActions.login,
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
