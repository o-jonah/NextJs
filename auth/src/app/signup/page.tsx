"use client"

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {Card,CardHeader,CardDescription,CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";


const Signup = () => {
 return(
  <div className="h-full items-center justify-content bg-[#1b0918]">
    <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
      <CardHeader>

      
      <CardTitle className="text-center">
        Sign Up

      </CardTitle>
      <CardDescription className="text-sm text-center text-accent-foreground">
        Use your credentials to create account

      </CardDescription>
     </CardHeader>
     <CardContent className="px-2 sm:px-6">
      <form action="" className="space-y-3">
        <Input
          type="text"
          disabled={false}
          placeholder="Full Name"
          value={""}
          onChange={() => { }}
          required
        />
                <Input
          type="email"
          disabled={false}
          placeholder="email"
          value={""}
          onChange={() => { }}
          required
        />
                <Input
          type="password"
          disabled={false}
          placeholder="password"
          value={""}
          onChange={() => { }}
          required
        />
                <Input
          type="password"
          disabled={false}
          placeholder="confirm password"
          value={""}
          onChange={() => { }}
          required
        />
        <Button className="w-full"
        size="lg"
        disabled={false}>
          Continue

        </Button>
      </form>

      <Separator />
      <div></div>

     </CardContent>
    </Card>
  </div>
 )
}

export default Signup;