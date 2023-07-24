import joi from 'joi';
export const userTypes = {
  CUSTOMER: 'customer',
  BUSINESS: 'business',
  MERCHANT: 'merchant',
  ADMIN: 'admin',
};

export const envTypes = {
  development: 'development.env',
  staging: 'staging.env',
  production: 'production.env',
};

export const RouteActions = {
  READ: 'read',
  WRITE: 'write',
  UPDATE: 'update',
  DELETE: 'delete',
};

export const MerchantModules = [
  {
    name: 'Custodian',
    routes: [
      {
        name: 'Custody Check',
        value: 'custody_check',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
      {
        name: 'Sales',
        value: 'sales',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
      {
        name: 'Purchase',
        value: 'purchase',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
    ],
  },
  {
    name: 'Hub',
    routes: [
      {
        name: 'Orders',
        value: 'hub_orders',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
      {
        name: 'Bar',
        value: 'hub_orders',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
    ],
  },
  {
    name: 'Refiner',
    routes: [
      {
        name: 'Orders',
        value: 'refiner_orders',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
    ],
  },
  {
    name: 'Verifier',
    routes: [
      {
        name: 'Orders',
        value: 'verifier_orders',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
    ],
  },
  {
    name: 'Ecom',
    routes: [
      {
        name: 'Products',
        value: 'product',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
      {
        name: 'Offers',
        value: 'offer',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
      {
        name: 'Orders',
        value: 'ecom_orders',
        actions: [
          RouteActions.READ,
          RouteActions.WRITE,
          RouteActions.UPDATE,
          RouteActions.DELETE,
        ],
      },
    ],
  },
];

export const listValidator = (items) => {
  if (!items) throw new Error('joi: items is required');

  const custom = joi.extend((joi) => {
    return {
      type: joi.array().type,
      base: joi.array(),
      coerce(value, schema) {
        try {
          return {
            value: value.split(','),
          };
        } catch (err) {}
      },
    };
  });

  return custom.array().items(items);
};

export const Nda = `<p style="text-align: center;"><strong><span style="font-size: 30px;">NDA IPR</span></strong></p>
<pre><code class="!whitespace-pre hljs language-vbnet">[Your Company Name]
[Address]
[City, State, Zip Code]
[<span class="hljs-type">Date</span>]

Non-Disclosure Agreement (NDA) <span class="hljs-built_in">and</span> Intellectual <span class="hljs-keyword">Property</span> Rights (IPR)

This Non-Disclosure Agreement (the <span class="hljs-string">&quot;Agreement&quot;</span>) <span class="hljs-built_in">is</span> entered <span class="hljs-keyword">into</span> <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> between [Your Company Name], <span class="hljs-keyword">with</span> its principal place <span class="hljs-keyword">of</span> business at [Address] (<span class="hljs-string">&quot;Disclosing Party&quot;</span>), <span class="hljs-built_in">and</span> [Recipient<span class="hljs-comment">&apos;s Name], residing at [Address] (&quot;Receiving Party&quot;).</span>

<span class="hljs-number">1</span>. Confidential Information: 
The Disclosing Party may disclose certain confidential <span class="hljs-built_in">and</span> proprietary information (the <span class="hljs-string">&quot;Confidential Information&quot;</span>) <span class="hljs-keyword">to</span> the Receiving Party. This includes, but <span class="hljs-built_in">is</span> <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span>, trade secrets, business plans, financial information, customer data, product designs, software code, <span class="hljs-built_in">and</span> any other information marked <span class="hljs-built_in">or</span> designated <span class="hljs-keyword">as</span> confidential.

<span class="hljs-number">2</span>. Purpose:
The Receiving Party agrees <span class="hljs-keyword">to</span> receive <span class="hljs-built_in">and</span> use the Confidential Information solely <span class="hljs-keyword">for</span> the purpose <span class="hljs-keyword">of</span> [describe the purpose <span class="hljs-keyword">of</span> sharing the information].

<span class="hljs-number">3</span>. Non-Disclosure:
The Receiving Party shall treat all Confidential Information <span class="hljs-keyword">as</span> strictly confidential <span class="hljs-built_in">and</span> shall <span class="hljs-built_in">not</span> disclose, publish, <span class="hljs-built_in">or</span> reveal it <span class="hljs-keyword">to</span> any third party without the prior written consent <span class="hljs-keyword">of</span> the Disclosing Party. The Receiving Party shall exercise reasonable care <span class="hljs-keyword">to</span> prevent unauthorized use <span class="hljs-built_in">or</span> disclosure <span class="hljs-keyword">of</span> the Confidential Information.

<span class="hljs-number">4</span>. Exclusions:
The obligations <span class="hljs-keyword">of</span> confidentiality <span class="hljs-built_in">and</span> non-disclosure shall <span class="hljs-built_in">not</span> apply <span class="hljs-keyword">to</span> any information that:
   a. Was already <span class="hljs-keyword">in</span> the Receiving Party<span class="hljs-comment">&apos;s possession without any obligation of confidentiality prior to disclosure;</span>
   b. Becomes publicly known <span class="hljs-built_in">or</span> available without breach <span class="hljs-keyword">of</span> this Agreement;
   c. <span class="hljs-built_in">Is</span> rightfully obtained <span class="hljs-keyword">by</span> the Receiving Party <span class="hljs-keyword">from</span> a third party without any obligation <span class="hljs-keyword">of</span> confidentiality.

<span class="hljs-number">5</span>. Ownership <span class="hljs-keyword">of</span> Intellectual <span class="hljs-keyword">Property</span>:
Any intellectual <span class="hljs-keyword">property</span>, including but <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span> patents, trademarks, copyrights, <span class="hljs-built_in">and</span> trade secrets, that <span class="hljs-built_in">is</span> disclosed <span class="hljs-built_in">or</span> developed during the course <span class="hljs-keyword">of</span> this Agreement shall remain the <span class="hljs-keyword">property</span> <span class="hljs-keyword">of</span> the Disclosing Party.

<span class="hljs-number">6</span>. Term <span class="hljs-built_in">and</span> Termination:
This Agreement shall commence <span class="hljs-keyword">on</span> the effective <span class="hljs-type">date</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">continue</span> <span class="hljs-keyword">for</span> [specify duration] <span class="hljs-built_in">or</span> <span class="hljs-keyword">until</span> terminated <span class="hljs-keyword">by</span> either party <span class="hljs-keyword">in</span> writing. Upon termination, the Receiving Party shall promptly <span class="hljs-keyword">return</span> <span class="hljs-built_in">or</span> destroy all Confidential Information received under this Agreement.

<span class="hljs-number">7</span>. Governing Law <span class="hljs-built_in">and</span> Jurisdiction:
This Agreement shall be governed <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> construed <span class="hljs-keyword">in</span> accordance <span class="hljs-keyword">with</span> the laws <span class="hljs-keyword">of</span> [specify jurisdiction]. Any disputes arising under <span class="hljs-built_in">or</span> <span class="hljs-keyword">in</span> connection <span class="hljs-keyword">with</span> this Agreement shall be subject <span class="hljs-keyword">to</span> the exclusive jurisdiction <span class="hljs-keyword">of</span> the courts <span class="hljs-keyword">of</span> [specify jurisdiction].

[Your Company Name]
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]

[Recipient<span class="hljs-comment">&apos;s Name]</span>
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]</code></pre>
<p style="text-align: center;"><br></p>`;

export const VerifierAgreement = `<p style="text-align: center;"><strong><span style="font-size: 30px;">Verifier Agreement</span></strong></p>
<pre><code class="!whitespace-pre hljs language-vbnet">[Your Company Name]
[Address]
[City, State, Zip Code]
[<span class="hljs-type">Date</span>]

Non-Disclosure Agreement (NDA) <span class="hljs-built_in">and</span> Intellectual <span class="hljs-keyword">Property</span> Rights (IPR)

This Non-Disclosure Agreement (the <span class="hljs-string">&quot;Agreement&quot;</span>) <span class="hljs-built_in">is</span> entered <span class="hljs-keyword">into</span> <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> between [Your Company Name], <span class="hljs-keyword">with</span> its principal place <span class="hljs-keyword">of</span> business at [Address] (<span class="hljs-string">&quot;Disclosing Party&quot;</span>), <span class="hljs-built_in">and</span> [Recipient<span class="hljs-comment">&apos;s Name], residing at [Address] (&quot;Receiving Party&quot;).</span>

<span class="hljs-number">1</span>. Confidential Information: 
The Disclosing Party may disclose certain confidential <span class="hljs-built_in">and</span> proprietary information (the <span class="hljs-string">&quot;Confidential Information&quot;</span>) <span class="hljs-keyword">to</span> the Receiving Party. This includes, but <span class="hljs-built_in">is</span> <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span>, trade secrets, business plans, financial information, customer data, product designs, software code, <span class="hljs-built_in">and</span> any other information marked <span class="hljs-built_in">or</span> designated <span class="hljs-keyword">as</span> confidential.

<span class="hljs-number">2</span>. Purpose:
The Receiving Party agrees <span class="hljs-keyword">to</span> receive <span class="hljs-built_in">and</span> use the Confidential Information solely <span class="hljs-keyword">for</span> the purpose <span class="hljs-keyword">of</span> [describe the purpose <span class="hljs-keyword">of</span> sharing the information].

<span class="hljs-number">3</span>. Non-Disclosure:
The Receiving Party shall treat all Confidential Information <span class="hljs-keyword">as</span> strictly confidential <span class="hljs-built_in">and</span> shall <span class="hljs-built_in">not</span> disclose, publish, <span class="hljs-built_in">or</span> reveal it <span class="hljs-keyword">to</span> any third party without the prior written consent <span class="hljs-keyword">of</span> the Disclosing Party. The Receiving Party shall exercise reasonable care <span class="hljs-keyword">to</span> prevent unauthorized use <span class="hljs-built_in">or</span> disclosure <span class="hljs-keyword">of</span> the Confidential Information.

<span class="hljs-number">4</span>. Exclusions:
The obligations <span class="hljs-keyword">of</span> confidentiality <span class="hljs-built_in">and</span> non-disclosure shall <span class="hljs-built_in">not</span> apply <span class="hljs-keyword">to</span> any information that:
   a. Was already <span class="hljs-keyword">in</span> the Receiving Party<span class="hljs-comment">&apos;s possession without any obligation of confidentiality prior to disclosure;</span>
   b. Becomes publicly known <span class="hljs-built_in">or</span> available without breach <span class="hljs-keyword">of</span> this Agreement;
   c. <span class="hljs-built_in">Is</span> rightfully obtained <span class="hljs-keyword">by</span> the Receiving Party <span class="hljs-keyword">from</span> a third party without any obligation <span class="hljs-keyword">of</span> confidentiality.

<span class="hljs-number">5</span>. Ownership <span class="hljs-keyword">of</span> Intellectual <span class="hljs-keyword">Property</span>:
Any intellectual <span class="hljs-keyword">property</span>, including but <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span> patents, trademarks, copyrights, <span class="hljs-built_in">and</span> trade secrets, that <span class="hljs-built_in">is</span> disclosed <span class="hljs-built_in">or</span> developed during the course <span class="hljs-keyword">of</span> this Agreement shall remain the <span class="hljs-keyword">property</span> <span class="hljs-keyword">of</span> the Disclosing Party.

<span class="hljs-number">6</span>. Term <span class="hljs-built_in">and</span> Termination:
This Agreement shall commence <span class="hljs-keyword">on</span> the effective <span class="hljs-type">date</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">continue</span> <span class="hljs-keyword">for</span> [specify duration] <span class="hljs-built_in">or</span> <span class="hljs-keyword">until</span> terminated <span class="hljs-keyword">by</span> either party <span class="hljs-keyword">in</span> writing. Upon termination, the Receiving Party shall promptly <span class="hljs-keyword">return</span> <span class="hljs-built_in">or</span> destroy all Confidential Information received under this Agreement.

<span class="hljs-number">7</span>. Governing Law <span class="hljs-built_in">and</span> Jurisdiction:
This Agreement shall be governed <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> construed <span class="hljs-keyword">in</span> accordance <span class="hljs-keyword">with</span> the laws <span class="hljs-keyword">of</span> [specify jurisdiction]. Any disputes arising under <span class="hljs-built_in">or</span> <span class="hljs-keyword">in</span> connection <span class="hljs-keyword">with</span> this Agreement shall be subject <span class="hljs-keyword">to</span> the exclusive jurisdiction <span class="hljs-keyword">of</span> the courts <span class="hljs-keyword">of</span> [specify jurisdiction].

[Your Company Name]
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]

[Recipient<span class="hljs-comment">&apos;s Name]</span>
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]</code></pre>
<p style="text-align: center;"><br></p>`;

export const RefinerAgreement = `<p style="text-align: center;"><strong><span style="font-size: 30px;">Refiner Agreement</span></strong></p>
<pre><code class="!whitespace-pre hljs language-vbnet">[Your Company Name]
[Address]
[City, State, Zip Code]
[<span class="hljs-type">Date</span>]

Non-Disclosure Agreement (NDA) <span class="hljs-built_in">and</span> Intellectual <span class="hljs-keyword">Property</span> Rights (IPR)

This Non-Disclosure Agreement (the <span class="hljs-string">&quot;Agreement&quot;</span>) <span class="hljs-built_in">is</span> entered <span class="hljs-keyword">into</span> <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> between [Your Company Name], <span class="hljs-keyword">with</span> its principal place <span class="hljs-keyword">of</span> business at [Address] (<span class="hljs-string">&quot;Disclosing Party&quot;</span>), <span class="hljs-built_in">and</span> [Recipient<span class="hljs-comment">&apos;s Name], residing at [Address] (&quot;Receiving Party&quot;).</span>

<span class="hljs-number">1</span>. Confidential Information: 
The Disclosing Party may disclose certain confidential <span class="hljs-built_in">and</span> proprietary information (the <span class="hljs-string">&quot;Confidential Information&quot;</span>) <span class="hljs-keyword">to</span> the Receiving Party. This includes, but <span class="hljs-built_in">is</span> <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span>, trade secrets, business plans, financial information, customer data, product designs, software code, <span class="hljs-built_in">and</span> any other information marked <span class="hljs-built_in">or</span> designated <span class="hljs-keyword">as</span> confidential.

<span class="hljs-number">2</span>. Purpose:
The Receiving Party agrees <span class="hljs-keyword">to</span> receive <span class="hljs-built_in">and</span> use the Confidential Information solely <span class="hljs-keyword">for</span> the purpose <span class="hljs-keyword">of</span> [describe the purpose <span class="hljs-keyword">of</span> sharing the information].

<span class="hljs-number">3</span>. Non-Disclosure:
The Receiving Party shall treat all Confidential Information <span class="hljs-keyword">as</span> strictly confidential <span class="hljs-built_in">and</span> shall <span class="hljs-built_in">not</span> disclose, publish, <span class="hljs-built_in">or</span> reveal it <span class="hljs-keyword">to</span> any third party without the prior written consent <span class="hljs-keyword">of</span> the Disclosing Party. The Receiving Party shall exercise reasonable care <span class="hljs-keyword">to</span> prevent unauthorized use <span class="hljs-built_in">or</span> disclosure <span class="hljs-keyword">of</span> the Confidential Information.

<span class="hljs-number">4</span>. Exclusions:
The obligations <span class="hljs-keyword">of</span> confidentiality <span class="hljs-built_in">and</span> non-disclosure shall <span class="hljs-built_in">not</span> apply <span class="hljs-keyword">to</span> any information that:
   a. Was already <span class="hljs-keyword">in</span> the Receiving Party<span class="hljs-comment">&apos;s possession without any obligation of confidentiality prior to disclosure;</span>
   b. Becomes publicly known <span class="hljs-built_in">or</span> available without breach <span class="hljs-keyword">of</span> this Agreement;
   c. <span class="hljs-built_in">Is</span> rightfully obtained <span class="hljs-keyword">by</span> the Receiving Party <span class="hljs-keyword">from</span> a third party without any obligation <span class="hljs-keyword">of</span> confidentiality.

<span class="hljs-number">5</span>. Ownership <span class="hljs-keyword">of</span> Intellectual <span class="hljs-keyword">Property</span>:
Any intellectual <span class="hljs-keyword">property</span>, including but <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span> patents, trademarks, copyrights, <span class="hljs-built_in">and</span> trade secrets, that <span class="hljs-built_in">is</span> disclosed <span class="hljs-built_in">or</span> developed during the course <span class="hljs-keyword">of</span> this Agreement shall remain the <span class="hljs-keyword">property</span> <span class="hljs-keyword">of</span> the Disclosing Party.

<span class="hljs-number">6</span>. Term <span class="hljs-built_in">and</span> Termination:
This Agreement shall commence <span class="hljs-keyword">on</span> the effective <span class="hljs-type">date</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">continue</span> <span class="hljs-keyword">for</span> [specify duration] <span class="hljs-built_in">or</span> <span class="hljs-keyword">until</span> terminated <span class="hljs-keyword">by</span> either party <span class="hljs-keyword">in</span> writing. Upon termination, the Receiving Party shall promptly <span class="hljs-keyword">return</span> <span class="hljs-built_in">or</span> destroy all Confidential Information received under this Agreement.

<span class="hljs-number">7</span>. Governing Law <span class="hljs-built_in">and</span> Jurisdiction:
This Agreement shall be governed <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> construed <span class="hljs-keyword">in</span> accordance <span class="hljs-keyword">with</span> the laws <span class="hljs-keyword">of</span> [specify jurisdiction]. Any disputes arising under <span class="hljs-built_in">or</span> <span class="hljs-keyword">in</span> connection <span class="hljs-keyword">with</span> this Agreement shall be subject <span class="hljs-keyword">to</span> the exclusive jurisdiction <span class="hljs-keyword">of</span> the courts <span class="hljs-keyword">of</span> [specify jurisdiction].

[Your Company Name]
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]

[Recipient<span class="hljs-comment">&apos;s Name]</span>
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]</code></pre>
<p style="text-align: center;"><br></p>`;

export const RetailerAgreement = `<p style="text-align: center;"><strong><span style="font-size: 30px;">Retailer Agreement</span></strong></p>
<pre><code class="!whitespace-pre hljs language-vbnet">[Your Company Name]
[Address]
[City, State, Zip Code]
[<span class="hljs-type">Date</span>]

Non-Disclosure Agreement (NDA) <span class="hljs-built_in">and</span> Intellectual <span class="hljs-keyword">Property</span> Rights (IPR)

This Non-Disclosure Agreement (the <span class="hljs-string">&quot;Agreement&quot;</span>) <span class="hljs-built_in">is</span> entered <span class="hljs-keyword">into</span> <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> between [Your Company Name], <span class="hljs-keyword">with</span> its principal place <span class="hljs-keyword">of</span> business at [Address] (<span class="hljs-string">&quot;Disclosing Party&quot;</span>), <span class="hljs-built_in">and</span> [Recipient<span class="hljs-comment">&apos;s Name], residing at [Address] (&quot;Receiving Party&quot;).</span>

<span class="hljs-number">1</span>. Confidential Information: 
The Disclosing Party may disclose certain confidential <span class="hljs-built_in">and</span> proprietary information (the <span class="hljs-string">&quot;Confidential Information&quot;</span>) <span class="hljs-keyword">to</span> the Receiving Party. This includes, but <span class="hljs-built_in">is</span> <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span>, trade secrets, business plans, financial information, customer data, product designs, software code, <span class="hljs-built_in">and</span> any other information marked <span class="hljs-built_in">or</span> designated <span class="hljs-keyword">as</span> confidential.

<span class="hljs-number">2</span>. Purpose:
The Receiving Party agrees <span class="hljs-keyword">to</span> receive <span class="hljs-built_in">and</span> use the Confidential Information solely <span class="hljs-keyword">for</span> the purpose <span class="hljs-keyword">of</span> [describe the purpose <span class="hljs-keyword">of</span> sharing the information].

<span class="hljs-number">3</span>. Non-Disclosure:
The Receiving Party shall treat all Confidential Information <span class="hljs-keyword">as</span> strictly confidential <span class="hljs-built_in">and</span> shall <span class="hljs-built_in">not</span> disclose, publish, <span class="hljs-built_in">or</span> reveal it <span class="hljs-keyword">to</span> any third party without the prior written consent <span class="hljs-keyword">of</span> the Disclosing Party. The Receiving Party shall exercise reasonable care <span class="hljs-keyword">to</span> prevent unauthorized use <span class="hljs-built_in">or</span> disclosure <span class="hljs-keyword">of</span> the Confidential Information.

<span class="hljs-number">4</span>. Exclusions:
The obligations <span class="hljs-keyword">of</span> confidentiality <span class="hljs-built_in">and</span> non-disclosure shall <span class="hljs-built_in">not</span> apply <span class="hljs-keyword">to</span> any information that:
   a. Was already <span class="hljs-keyword">in</span> the Receiving Party<span class="hljs-comment">&apos;s possession without any obligation of confidentiality prior to disclosure;</span>
   b. Becomes publicly known <span class="hljs-built_in">or</span> available without breach <span class="hljs-keyword">of</span> this Agreement;
   c. <span class="hljs-built_in">Is</span> rightfully obtained <span class="hljs-keyword">by</span> the Receiving Party <span class="hljs-keyword">from</span> a third party without any obligation <span class="hljs-keyword">of</span> confidentiality.

<span class="hljs-number">5</span>. Ownership <span class="hljs-keyword">of</span> Intellectual <span class="hljs-keyword">Property</span>:
Any intellectual <span class="hljs-keyword">property</span>, including but <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span> patents, trademarks, copyrights, <span class="hljs-built_in">and</span> trade secrets, that <span class="hljs-built_in">is</span> disclosed <span class="hljs-built_in">or</span> developed during the course <span class="hljs-keyword">of</span> this Agreement shall remain the <span class="hljs-keyword">property</span> <span class="hljs-keyword">of</span> the Disclosing Party.

<span class="hljs-number">6</span>. Term <span class="hljs-built_in">and</span> Termination:
This Agreement shall commence <span class="hljs-keyword">on</span> the effective <span class="hljs-type">date</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">continue</span> <span class="hljs-keyword">for</span> [specify duration] <span class="hljs-built_in">or</span> <span class="hljs-keyword">until</span> terminated <span class="hljs-keyword">by</span> either party <span class="hljs-keyword">in</span> writing. Upon termination, the Receiving Party shall promptly <span class="hljs-keyword">return</span> <span class="hljs-built_in">or</span> destroy all Confidential Information received under this Agreement.

<span class="hljs-number">7</span>. Governing Law <span class="hljs-built_in">and</span> Jurisdiction:
This Agreement shall be governed <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> construed <span class="hljs-keyword">in</span> accordance <span class="hljs-keyword">with</span> the laws <span class="hljs-keyword">of</span> [specify jurisdiction]. Any disputes arising under <span class="hljs-built_in">or</span> <span class="hljs-keyword">in</span> connection <span class="hljs-keyword">with</span> this Agreement shall be subject <span class="hljs-keyword">to</span> the exclusive jurisdiction <span class="hljs-keyword">of</span> the courts <span class="hljs-keyword">of</span> [specify jurisdiction].

[Your Company Name]
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]

[Recipient<span class="hljs-comment">&apos;s Name]</span>
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]</code></pre>
<p style="text-align: center;"><br></p>`;

export const LeasePartnerAgreement = `<p style="text-align: center;"><strong><span style="font-size: 30px;">Lease Partner Agreement</span></strong></p>
<pre><code class="!whitespace-pre hljs language-vbnet">[Your Company Name]
[Address]
[City, State, Zip Code]
[<span class="hljs-type">Date</span>]

Non-Disclosure Agreement (NDA) <span class="hljs-built_in">and</span> Intellectual <span class="hljs-keyword">Property</span> Rights (IPR)

This Non-Disclosure Agreement (the <span class="hljs-string">&quot;Agreement&quot;</span>) <span class="hljs-built_in">is</span> entered <span class="hljs-keyword">into</span> <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> between [Your Company Name], <span class="hljs-keyword">with</span> its principal place <span class="hljs-keyword">of</span> business at [Address] (<span class="hljs-string">&quot;Disclosing Party&quot;</span>), <span class="hljs-built_in">and</span> [Recipient<span class="hljs-comment">&apos;s Name], residing at [Address] (&quot;Receiving Party&quot;).</span>

<span class="hljs-number">1</span>. Confidential Information: 
The Disclosing Party may disclose certain confidential <span class="hljs-built_in">and</span> proprietary information (the <span class="hljs-string">&quot;Confidential Information&quot;</span>) <span class="hljs-keyword">to</span> the Receiving Party. This includes, but <span class="hljs-built_in">is</span> <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span>, trade secrets, business plans, financial information, customer data, product designs, software code, <span class="hljs-built_in">and</span> any other information marked <span class="hljs-built_in">or</span> designated <span class="hljs-keyword">as</span> confidential.

<span class="hljs-number">2</span>. Purpose:
The Receiving Party agrees <span class="hljs-keyword">to</span> receive <span class="hljs-built_in">and</span> use the Confidential Information solely <span class="hljs-keyword">for</span> the purpose <span class="hljs-keyword">of</span> [describe the purpose <span class="hljs-keyword">of</span> sharing the information].

<span class="hljs-number">3</span>. Non-Disclosure:
The Receiving Party shall treat all Confidential Information <span class="hljs-keyword">as</span> strictly confidential <span class="hljs-built_in">and</span> shall <span class="hljs-built_in">not</span> disclose, publish, <span class="hljs-built_in">or</span> reveal it <span class="hljs-keyword">to</span> any third party without the prior written consent <span class="hljs-keyword">of</span> the Disclosing Party. The Receiving Party shall exercise reasonable care <span class="hljs-keyword">to</span> prevent unauthorized use <span class="hljs-built_in">or</span> disclosure <span class="hljs-keyword">of</span> the Confidential Information.

<span class="hljs-number">4</span>. Exclusions:
The obligations <span class="hljs-keyword">of</span> confidentiality <span class="hljs-built_in">and</span> non-disclosure shall <span class="hljs-built_in">not</span> apply <span class="hljs-keyword">to</span> any information that:
   a. Was already <span class="hljs-keyword">in</span> the Receiving Party<span class="hljs-comment">&apos;s possession without any obligation of confidentiality prior to disclosure;</span>
   b. Becomes publicly known <span class="hljs-built_in">or</span> available without breach <span class="hljs-keyword">of</span> this Agreement;
   c. <span class="hljs-built_in">Is</span> rightfully obtained <span class="hljs-keyword">by</span> the Receiving Party <span class="hljs-keyword">from</span> a third party without any obligation <span class="hljs-keyword">of</span> confidentiality.

<span class="hljs-number">5</span>. Ownership <span class="hljs-keyword">of</span> Intellectual <span class="hljs-keyword">Property</span>:
Any intellectual <span class="hljs-keyword">property</span>, including but <span class="hljs-built_in">not</span> limited <span class="hljs-keyword">to</span> patents, trademarks, copyrights, <span class="hljs-built_in">and</span> trade secrets, that <span class="hljs-built_in">is</span> disclosed <span class="hljs-built_in">or</span> developed during the course <span class="hljs-keyword">of</span> this Agreement shall remain the <span class="hljs-keyword">property</span> <span class="hljs-keyword">of</span> the Disclosing Party.

<span class="hljs-number">6</span>. Term <span class="hljs-built_in">and</span> Termination:
This Agreement shall commence <span class="hljs-keyword">on</span> the effective <span class="hljs-type">date</span> <span class="hljs-built_in">and</span> <span class="hljs-keyword">continue</span> <span class="hljs-keyword">for</span> [specify duration] <span class="hljs-built_in">or</span> <span class="hljs-keyword">until</span> terminated <span class="hljs-keyword">by</span> either party <span class="hljs-keyword">in</span> writing. Upon termination, the Receiving Party shall promptly <span class="hljs-keyword">return</span> <span class="hljs-built_in">or</span> destroy all Confidential Information received under this Agreement.

<span class="hljs-number">7</span>. Governing Law <span class="hljs-built_in">and</span> Jurisdiction:
This Agreement shall be governed <span class="hljs-keyword">by</span> <span class="hljs-built_in">and</span> construed <span class="hljs-keyword">in</span> accordance <span class="hljs-keyword">with</span> the laws <span class="hljs-keyword">of</span> [specify jurisdiction]. Any disputes arising under <span class="hljs-built_in">or</span> <span class="hljs-keyword">in</span> connection <span class="hljs-keyword">with</span> this Agreement shall be subject <span class="hljs-keyword">to</span> the exclusive jurisdiction <span class="hljs-keyword">of</span> the courts <span class="hljs-keyword">of</span> [specify jurisdiction].

[Your Company Name]
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]

[Recipient<span class="hljs-comment">&apos;s Name]</span>
[Signature <span class="hljs-built_in">and</span> <span class="hljs-type">Date</span>]</code></pre>
<p style="text-align: center;"><br></p>`;
