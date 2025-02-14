// Copyright 2020 Bhautik
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const server = serve({port: 8080});
console.log(`Server running on PORT: ${server}`);

for await (const req of server) {
    req.respond({
        body: v4.generate().toString()
    })
}

